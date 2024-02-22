import { StyledButton } from './Button.styled';

export default function Button({
  children,
  paddingY = 12,
  paddingX = 50,
  disabled,
  onClick,
}) {
  return (
    <StyledButton
      paddingY={paddingY}
      paddingX={paddingX}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}