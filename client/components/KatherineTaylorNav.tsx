import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// ═══════════════════════════════════════════════════════════════════
// DESIGN SYSTEM: De Beers × Hermès — Katherine Taylor Edition
// ══════════════════════════════════════════════════��════════════════

const DesignTokens = {
  font: {
    primary: '"Helvetica Neue", "Helvetica", Arial, sans-serif',
    weight: {
      ultraLight: 25,
      light: 35,
      regular: 45,
      medium: 55,
    },
    size: {
      nav: 'clamp(9px, 0.55vw, 10px)',
      logo: 'clamp(12px, 0.75vw, 14px)',
      menuItem: 'clamp(24px, 2.2vw, 36px)',
      menuLabel: 'clamp(8px, 0.5vw, 9px)',
    },
    tracking: {
      wide: '0.22em',
      wider: '0.28em',
      widest: '0.36em',
    },
  },

  spacing: {
    header: 'clamp(60px, 4.8vh, 72px)',
    menuPadding: 'clamp(80px, 8vh, 120px)',
  },

  effect: {
    blur: 'blur(32px) saturate(180%)',
    shadow: {
      header: '0 1px 0 rgba(0, 0, 0, 0.04)',
      bell: '0 2px 12px rgba(0, 0, 0, 0.08)',
    },
    gradient: {
      backdrop: 'linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.88) 100%)',
      overlay: 'linear-gradient(135deg, rgba(250, 250, 250, 0.98) 0%, rgba(255, 255, 255, 0.96) 100%)',
    },
  },

  ease: {
    smooth: 'cubic-bezier(0.32, 0, 0.24, 1)',
    gentle: 'cubic-bezier(0.4, 0, 0.2, 1)',
    exit: 'cubic-bezier(0.6, 0, 0.8, 1)',
    luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },

  z: {
    header: 1000,
    overlay: 1100,
  },
};

// ══════════��════════════════════════════════════════════════════════
// STYLED COMPONENTS — HEADER
// ═════════════════��═════════════════════════════════════════════════

const HeaderContainer = styled.header<{ $hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${DesignTokens.z.header};
  height: ${DesignTokens.spacing.header};
  transform: translateY(${props => props.$hidden ? '-100%' : '0'});
  transition: transform 420ms ${DesignTokens.ease.smooth};
  will-change: transform;
`;

const HeaderBackdrop = styled.div<{ $transparent: boolean }>`
  position: absolute;
  inset: 0;
  background: ${DesignTokens.effect.gradient.backdrop};
  backdrop-filter: ${DesignTokens.effect.blur};
  -webkit-backdrop-filter: ${DesignTokens.effect.blur};
  box-shadow: ${DesignTokens.effect.shadow.header};
  opacity: ${props => props.$transparent ? 0 : 1};
  transition: opacity 340ms ${DesignTokens.ease.gentle};
  will-change: opacity;
`;

const HeaderContent = styled.div`
  position: relative;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 clamp(24px, 3.2vw, 64px);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// ═══════════════════════════════════════════════════════════════════
// MENU BUTTON
// ═══════════════════════════════════════════════════════════════════

const MenuButton = styled.button`
  font-family: ${DesignTokens.font.primary};
  font-size: ${DesignTokens.font.size.nav};
  font-weight: ${DesignTokens.font.weight.light};
  letter-spacing: ${DesignTokens.font.tracking.widest};
  text-transform: uppercase;
  color: #000;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  transition: color 280ms ${DesignTokens.ease.gentle};

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 1.5px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 320ms ${DesignTokens.ease.smooth};
  }

  &:hover {
    color: #000;

    &::after {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 1.5px solid rgba(0, 0, 0, 0.3);
    outline-offset: 6px;
  }
`;

// ═══════════════════════════════════════════════════════════════════
// LOGO
// ═══════════════════════════════════════════════════════════════════

const Logo = styled.a`
  font-family: ${DesignTokens.font.primary};
  font-size: ${DesignTokens.font.size.logo};
  font-weight: ${DesignTokens.font.weight.ultraLight};
  letter-spacing: ${DesignTokens.font.tracking.widest};
  text-transform: uppercase;
  color: #000;
  text-decoration: none;
  white-space: nowrap;
  transition: color 240ms ${DesignTokens.ease.gentle};

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  &:focus-visible {
    outline: 1.5px solid rgba(0, 0, 0, 0.3);
    outline-offset: 6px;
  }
`;

// ═══════════════════════════════════════════════════════════════════
// CONCIERGE BELL — Harry Winston Inspired
// ════════════════════════════════���══════════════════════════════════

const BellButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 280ms ${DesignTokens.ease.gentle};

  &:hover {
    color: #000;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 1.5px solid rgba(0, 0, 0, 0.3);
    outline-offset: 6px;
  }

  svg {
    width: 100%;
    height: 100%;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

// ═══════════════════════════════════════════════════════════════════
// FULL-SCREEN MENU OVERLAY
// ════════════════════════════════════════��══════════════════════════

const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${DesignTokens.z.overlay};
  background: ${DesignTokens.effect.gradient.overlay};
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition:
    opacity 480ms ${DesignTokens.ease.luxe},
    visibility 0s ${props => props.$isOpen ? '0s' : '480ms'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MenuHeader = styled.div`
  height: ${DesignTokens.spacing.header};
  padding: 0 clamp(24px, 3.2vw, 64px);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const CloseButton = styled.button`
  font-family: ${DesignTokens.font.primary};
  font-size: ${DesignTokens.font.size.nav};
  font-weight: ${DesignTokens.font.weight.light};
  letter-spacing: ${DesignTokens.font.tracking.widest};
  text-transform: uppercase;
  color: #000;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  transition: color 280ms ${DesignTokens.ease.gentle};

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 1.5px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 320ms ${DesignTokens.ease.smooth};
  }

  &:hover {
    color: #000;

    &::after {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 1.5px solid rgba(0, 0, 0, 0.3);
    outline-offset: 6px;
  }
`;

const MenuContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${DesignTokens.spacing.menuPadding} clamp(24px, 3.2vw, 64px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    transition: background 240ms ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.16);
  }
`;

const MenuNav = styled.nav`
  width: 100%;
  max-width: 800px;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(20px, 2.4vh, 32px);
`;

const MenuItem = styled.li<{ $isOpen: boolean; $delay: number }>`
  width: 100%;
  text-align: center;
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: translateY(${props => props.$isOpen ? '0' : '16px'});
  transition:
    opacity 520ms ${DesignTokens.ease.luxe} ${props => props.$delay}ms,
    transform 520ms ${DesignTokens.ease.luxe} ${props => props.$delay}ms;
`;

const MenuLink = styled.a`
  font-family: ${DesignTokens.font.primary};
  font-size: ${DesignTokens.font.size.menuItem};
  font-weight: ${DesignTokens.font.weight.light};
  letter-spacing: ${DesignTokens.font.tracking.widest};
  text-transform: uppercase;
  color: #000;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: all 300ms ${DesignTokens.ease.gentle};

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    right: 50%;
    height: 1.5px;
    background: #000;
    transition: all 320ms ${DesignTokens.ease.smooth};
  }

  &:hover {
    color: #000;
    letter-spacing: ${DesignTokens.font.tracking.widest};

    &::after {
      left: 0;
      right: 0;
    }
  }

  &:focus-visible {
    outline: 1.5px solid rgba(0, 0, 0, 0.3);
    outline-offset: 8px;
  }
`;

const MenuLabel = styled.span`
  display: block;
  font-family: ${DesignTokens.font.primary};
  font-size: ${DesignTokens.font.size.menuLabel};
  font-weight: ${DesignTokens.font.weight.light};
  letter-spacing: ${DesignTokens.font.tracking.wider};
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.55);
  margin-top: 8px;
`;

// ═══════════════════════════════════════════════════════════���═══════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════

interface KatherineTaylorNavProps {
  onInquireClick?: () => void;
}

const KatherineTaylorNav: React.FC<KatherineTaylorNavProps> = ({ onInquireClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const lastScrollY = useRef(0);

  const navigationItems = [
    { label: 'About', url: '/about' },
    { label: 'Gallery', url: '/gallery' },
    { label: 'FAQ', url: '/faq' },
    { label: 'Journal', url: '/journal' },
    { label: 'Rates', url: '/rates' },
    { label: 'SAC', url: '/sacramento', subtitle: 'Sacramento' },
    { label: 'SF', url: '/san-francisco', subtitle: 'San Francisco' },
    { label: 'Gifts', url: '/gifts' },
    { label: 'Inquire', url: '/inquire', isHighlight: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHeaderHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderHidden(false);
      }

      setIsHeaderTransparent(currentScrollY < 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleBellClick = () => {
    if (onInquireClick) {
      onInquireClick();
    } else {
      window.location.href = '/inquire';
    }
  };

  return (
    <>
      <HeaderContainer $hidden={isHeaderHidden && !isMenuOpen}>
        <HeaderBackdrop $transparent={isHeaderTransparent && !isMenuOpen} />

        <HeaderContent>
          <LeftSection>
            <BellButton
              onClick={handleBellClick}
              aria-label="Inquire"
              title="Ring for inquiry"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
              >
                <path d="M12 2c0 0 0 2 0 2" />
                <path d="M12 4c2.2 0 4 1.8 4 4v3c0 0 2 1 2 3v2H2v-2c0-2 2-3 2-3V8c0-2.2 1.8-4 4-4z" />
                <ellipse cx="12" cy="18.5" rx="2.5" ry="1.5" />
                <path d="M8.5 20h7" />
              </svg>
            </BellButton>
          </LeftSection>

          <CenterSection>
            <Logo href="/">
              Katherine Taylor
            </Logo>
          </CenterSection>

          <RightSection>
            <MenuButton
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              Menu
            </MenuButton>
          </RightSection>
        </HeaderContent>
      </HeaderContainer>

      <MenuOverlay $isOpen={isMenuOpen}>
        <MenuHeader>
          <div>
            <CloseButton
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              Close
            </CloseButton>
          </div>
          <Logo href="/">
            Katherine Taylor
          </Logo>
          <div />
        </MenuHeader>

        <MenuContent>
          <MenuNav>
            <MenuList>
              {navigationItems.map((item, index) => (
                <MenuItem
                  key={item.url}
                  $isOpen={isMenuOpen}
                  $delay={index * 40}
                >
                  <MenuLink
                    href={item.url}
                    onClick={(e) => {
                      if (item.label === 'Inquire') {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        handleBellClick();
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </MenuLink>
                  {item.subtitle && (
                    <MenuLabel>{item.subtitle}</MenuLabel>
                  )}
                </MenuItem>
              ))}
            </MenuList>
          </MenuNav>
        </MenuContent>
      </MenuOverlay>
    </>
  );
};

export default KatherineTaylorNav;
