interface IProps {
  root: string | HTMLElement
  url: string
  styles: string
  styleType: string
  props: any
}

const loader = function (options: IProps) {
  const { root, url, styles, styleType, props } = options

  const iframePromise = new Promise((resolve, reject) => {
    const iframe: any = document.createElement('iframe')
    iframe.src = url
    let element = document.body
    if (root instanceof HTMLElement) {
      element = root
    } else {
      element = document.querySelector(`${root}`) || document.body
    }
    element.appendChild(iframe)

    if (iframe.attachEvent) {
      iframe?.attachEvent('onload', function () {
        if (styles) {
          insertStyles(iframe, styles, styleType)
        }
        initProps(iframe, props)
        resolve(true)
      })
    } else {
      iframe.onload = function () {
        if (styles) {
          insertStyles(iframe, styles, styleType)
        }
        initProps(iframe, props)
        resolve(true)
      }
    }
  })

  return iframePromise
}

function insertStyles(iframe: any, styles: string, type: string) {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document

  if (type === 'inline') {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.crossOrigin = 'anonymous'
    link.href = styles
    iframeDoc.head.appendChild(link)
  } else {
    const style = document.createElement('style')
    style.textContent = styles
    iframeDoc.head.appendChild(style)
  }
}

function initProps(iframe: any, props: any) {
  const strProps = JSON.stringify(props)
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(strProps, 'http://localhost:5173')
  }
}

export { loader }
