export const isUserUsingMobile = () => {
    let isMobile: boolean = false

    if (typeof window !== 'undefined') {
        // Screen resolution method
        if (!isMobile) {
            const screenWidth = window.screen.width
            const screenHeight = window.screen.height
            isMobile = screenWidth < 768 || screenHeight < 768
        }

        // CSS media queries method
        if (!isMobile) {
            const bodyElement = document.getElementsByTagName('body')[0]
            isMobile =
                window
                    .getComputedStyle(bodyElement)
                    .getPropertyValue('content')
                    .indexOf('mobile') !== -1
        }

        // User agent string method
        // Touch events method
        if (!isMobile) {
            isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        }
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
        )
    }

    return isMobile
}
