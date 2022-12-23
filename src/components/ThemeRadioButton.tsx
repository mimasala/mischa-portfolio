import { FormControlLabel, Radio } from "@mui/material";

interface props {
  color: string;
  label?: string | undefined | null;
}

const ThemeRadioButton = ({ color, label, ...props }: props) => {
  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <Radio
            {...props}
            sx={{
              color: { color },
              "&.Mui-checked": {
                color: { color },
              },
            }}
          />
        }
      />
    </>
  );
};

export default ThemeRadioButton;
