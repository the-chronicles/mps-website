import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const InputBox = (props: {
  label: string;
  placeholder: string;
  type: string;
  box: boolean;
}) => {
  return (
    <Box my={5}>
      <FormControl>
        <FormLabel textTransform={"uppercase"}>{props.label}</FormLabel>
        {props.box === true ? (
          <Textarea
            placeholder={props.placeholder}
            _focus={{
              boxShadow: "0px 0px 3px #FD6001",
              border: 0,
            }}
            borderRadius={20}
            height={200}
            p={5}
          />
        ) : (
          <Input
            borderRadius={20}
            placeholder={props.placeholder}
            type={props.type}
            py={7}
          />
        )}
      </FormControl>
    </Box>
  );
};

export default InputBox;
