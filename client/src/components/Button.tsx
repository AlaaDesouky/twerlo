import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonProps = {
  textValue: string
  handleClick: () => void
}

export function BasicButtons({ textValue, handleClick }: ButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={handleClick} variant="contained">{textValue}</Button>
    </Stack>
  );
}
