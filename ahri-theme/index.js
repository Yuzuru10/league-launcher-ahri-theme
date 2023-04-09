import './theme.css';

window.addEventListener('load', () => {
    // Wait for viewport root
    const interval = setInterval(() => {
        const manager = document.getElementById('rcp-fe-viewport-root')
        if (manager) {
            clearInterval(interval)

            const observer = new MutationObserver(mutations => {
                const backdrop = document.querySelector('.regalia-loaded')?.shadowRoot.querySelector('.regalia-profile-banner-backdrop.regalia-banner-loaded');
                if (backdrop) {
                    backdrop.setAttribute('style', 'opacity: 0.5; filter: grayscale(100%) brightness(3);');
                }

                const socialChatGroup = document.querySelectorAll('.group-header');
                for (let i = 0; i < socialChatGroup.length; i++) {
                    socialChatGroup[i].setAttribute('style', 'background: rgba(0,0,0,0); color: dimgray;');
                }

                const member_name = document.querySelectorAll('.member-name');
                for (let j = 0; j < member_name.length; j++) {
                    member_name[j].setAttribute('style', 'color: dimgray;');
                }
            });

            observer.observe(manager, {
                childList: true,
                subtree: true
            });
        }
    }, 500);
});