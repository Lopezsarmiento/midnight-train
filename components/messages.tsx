import { Avatar, AvatarFallback } from './ui/avatar'

type MessageProps = {
  id: string
  content: string
  author: string
}
type MessagesProps = MessageProps[]

export default function Messages({ data }: { data: MessagesProps }) {
  return (
    <>
      {data.map(message => (
        <div key={message.id} className='whitespace-pre-wrap md:mr-12'>
          <Message message={message} />
        </div>
      ))}
    </>
  )
}

function Message({ message }: { message: MessageProps }) {
  const { author, content } = message
  const avatarText = author === 'user' ? 'U' : 'AI'
  const character = author === 'user' ? 'You' : 'Bot'
  const avatarStyle =
    author === 'user' ? 'text-sm' : 'bg-emerald-500 text-white'
  return (
    <div className='mb-6 flex gap-3 p-2'>
      <Avatar className=''>
        <AvatarFallback className={avatarStyle}>{avatarText}</AvatarFallback>
      </Avatar>
      <div className='w-full'>
        <div className='flex justify-between'>
          <p className='font-semibold'>{character}</p>
        </div>
        <div className='mt-2 text-sm text-zinc-500'>{content}</div>
      </div>
    </div>
  )
}
