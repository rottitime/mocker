import { Facebook, Twitter, Whatsapp } from '@/components/Icon'

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
  return (
    <section className="print-hidden">
      <ul>
        {data('', text).map(({ title, url, Icon }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Share
