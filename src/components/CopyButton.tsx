'use client'
import { ComponentProps, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Copy } from '@/components/Icon'

type Props = { dark?: boolean } & ComponentProps<typeof CopyToClipboard>

function CopyButton({ onCopy, dark, ...props }: Props) {
  const [copied, setCopied] = useState<boolean>(false)

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
        className={`flex items-center gap-2 rounded p-1 text-sm ${
          dark ? 'bg-white/20  text-white' : 'bg-black/80 text-white'
        }`}
        disabled={copied}
      >
        <Copy />
        {copied ? 'Copied' : 'Copy'}
      </button>
    </CopyToClipboard>
  )
}

export default CopyButton
