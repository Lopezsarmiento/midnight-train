'use client'
import { useState, useRef, useEffect } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowUpIcon } from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'
import { generateId } from '@/utils'
import { Post } from '@/services/httpservice'
import Messages from './messages'

export default function Chat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<
    { id: string; content: string; author: string }[]
  >([])
  const scrollref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollref.current) return
    scrollref.current.scrollTo(0, scrollref.current.scrollHeight)
  }, [messages])

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: generateId(),
      content: input,
      author: 'user'
    }
    setMessages(prev => [...prev, userMessage])

    try {
      const { botResponse } = await Post('/api/chat', { message: input })

      const botMessage = {
        id: generateId(),
        content: botResponse,
        author: 'bot'
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error: unknown) {
      console.error('Error fetching bot response:', error)
    }

    setInput('')
  }

  return (
    <section className='text-zinc-700'>
      <div className='container flex h-screen flex-col items-center justify-center'>
        <h1 className='font-serif text-2xl font-medium'>Chat</h1>
        <div className='mt-4 w-full max-w-lg'>
          <ScrollArea
            className='mb-2 h-[400px] rounded-md border p-4'
            ref={scrollref}
          >
            <Messages data={messages} />
          </ScrollArea>
          <form onSubmit={handleSendMessage}>
            <div className='flex justify-center'>
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='Ask me anything...'
                className='pr-12 placeholder:italic placeholder:text-zinc-600'
              />
              <Button
                size='icon'
                type='submit'
                variant='ghost'
                className='h-8 w-8 hover:bg-transparent hover:text-white'
              >
                <ArrowUpIcon className='h-6 w-6 text-emerald-500' />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
