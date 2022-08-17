import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type RowRadioButtonsGroupProps = {
  word: string | undefined;
  labelsList: string[];
  correct: boolean
  disabled: boolean
  handleClick: (target: EventTarget) => void
}

export function RowRadioButtonsGroup({ word, labelsList, handleClick, correct, disabled }: RowRadioButtonsGroupProps) {
  return (
    <FormControl>
      <FormLabel color={correct ? 'success' : 'error'} id="demo-row-radio-buttons-group-label">
        <h1>
          {word}
        </h1>
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {labelsList.map((label, index) =>
          <FormControlLabel
            disabled={disabled}
            key={index}
            value={label}
            control={<Radio onClick={e => handleClick(e.target)} />}
            label={label} />)}
      </RadioGroup>
    </FormControl>
  );
}
