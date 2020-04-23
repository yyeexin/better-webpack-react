import qs from 'qs'
export default function () {
	return qs.parse(window.location.href.split('?')[1] || '')
}
