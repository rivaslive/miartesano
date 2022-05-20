import Text from 'Components/Atoms/Text';
import { StyleContent, StyleImage, StyleWrapper } from './style';

interface CardHelpUsProps extends BaseComponent {
  src: string;
  description: string;
}

const CardHelpUs = ({ description, src, ...props }: CardHelpUsProps) => {
  return (
    <StyleWrapper {...props}>
      <StyleImage loading="lazy" src={src} />
      <StyleContent>
        <Text color="$white" fontWeight={600}>
          {description}
        </Text>
      </StyleContent>
    </StyleWrapper>
  );
};

export default CardHelpUs;
