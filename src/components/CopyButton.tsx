import { ComponentProps, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Copy } from '@/components/Icon'

type Props = ComponentProps<typeof CopyToClipboard>

function CopyButton({ onCopy, ...props }: Props) {
  const [copied, setCopied] = useState<boolean>(false)

  console.log({ copied })

  return (
    <CopyToClipboard
      {...props}
      onCopy={(text, result) => {
        setCopied(true)
        setTimeout(() => setCopied(false), 500)
        if (typeof onCopy === 'function') onCopy(text, result)
      }}
    >
      <button
        className="flex items-center gap-2 rounded bg-white/20 p-1 text-sm text-white"
        disabled={copied}
      >
        <Copy />
        {copied ? 'Copied' : 'Copy'}
      </button>
    </CopyToClipboard>
  )
}

export default CopyButton
