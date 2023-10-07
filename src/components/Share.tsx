'use client'
import { Facebook, Twitter, Whatsapp } from '@/components/Icon'
import { useUiContext } from '@/context/UiContext'

const data = (
  url: string,
  text: string
): { url: string; title: string; Icon: React.ElementType }[] => [
  {
    url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    title: 'Facebook',
    Icon: Facebook
  },
  {
    url: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    title: 'Twitter',
    Icon: Twitter
  },
  {
    url: `https://api.whatsapp.com/send?text=${text} ${url}`,
    title: 'Whatsapp',
    Icon: Whatsapp
  }
]

type Props = {
  text: string
}

function Share({ text }: Props) {
  const { url } = useUiContext()

  return (
    <ul className="inline-flex gap-5">
      {data(url, text).map(({ title, url, Icon }) => (
        <li key={title}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs"
            title={`Share on ${title}`}
          >
            <Icon className="mx-auto mb-1 block text-2xl" title="dede" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Share
