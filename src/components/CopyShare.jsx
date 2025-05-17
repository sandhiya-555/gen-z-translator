import { useState } from 'react';

function CopyShare({ translation }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(translation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="copy-share">
      <button onClick={handleCopy}>
        {copied ? 'Copied ✅' : 'Copy Translation'}
      </button>
    </div>
  );
}

export default CopyShare;
