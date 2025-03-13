'use client'

import Image from 'next/image'

const YandexMetrika = () => {
	// useEffect(() => {
	// 	// @ts-ignore
	// 	;(function (
	// 		m: any,
	// 		e: Document,
	// 		t: string,
	// 		r: string,
	// 		i: string,
	// 		k: HTMLScriptElement | null,
	// 		a: HTMLScriptElement | null
	// 	) {
	// 		m[i] =
	// 			m[i] ||
	// 			function () {
	// 				;(m[i].a = m[i].a || []).push(arguments)
	// 			}
	// 		// @ts-ignore
	// 		m[i].l = (1 * new Date()) as any
	// 		for (let j = 0; j < e.scripts.length; j++) {
	// 			if (e.scripts[j].src === r) {
	// 				return
	// 			}
	// 		}
	// 		k = e.createElement(t) as HTMLScriptElement
	// 		a = e.getElementsByTagName(t)[0] as HTMLScriptElement
	// 		// @ts-ignore
	// 		k.async = 1
	// 		k.src = r
	// 		a.parentNode?.insertBefore(k, a)
	// 	})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')
	// 	;(window as any).ym(97951921, 'init', {
	// 		clickmap: true,
	// 		trackLinks: true,
	// 		accurateTrackBounce: true,
	// 		webvisor: true,
	// 		ecommerce: 'dataLayer'
	// 	})
	// }, [])

	return (
		<noscript>
			<div>
				<Image
					src='https://mc.yandex.ru/watch/97951921'
					style={{ position: 'absolute', left: '-9999px' }}
					alt=''
				/>
			</div>
		</noscript>
	)
}

export default YandexMetrika
