import { ComponentProps, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Copy } from '@/components/Icon'

type Props = ComponentProps<typeof CopyToClipboard>

function CopyButton({ onCopy, ...props }: Props) {
  const [copied, setCopied] = useState(false)

  console.log({ copied })

  return (
    <CopyToClipboard
      {...props}
      onCopy={(text, result) => {
        console.log('clcked')
        setCopied(true)
        if (typeof onCopy === 'function') onCopy(text, result)
      }}
    >
      <button className="flex items-center gap-2 rounded border border-white bg-gray-600 p-1 text-sm text-white">
        <Copy />
        {copied} {!!copied ? 'Copy' : 'Copied'}
      </button>
    </CopyToClipboard>
  )
}

export default CopyButton
