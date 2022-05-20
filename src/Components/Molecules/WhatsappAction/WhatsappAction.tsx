import getConfig from 'Config';
import Text from 'Components/Atoms/Text';
import { HeadPhoneFilled } from 'Components/Atoms/Icons';

import { StyleContentText, StyleWhatsapp } from './style';

const { phone } = getConfig();

const WhatsappAction = (props: BaseComponent) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      href={`https://wa.me/${phone?.replace(' ', '')}?lang=es`}
    >
      <StyleWhatsapp {...props}>
        <HeadPhoneFilled />

        <StyleContentText>
          <Text color="$white">Compra por Whatsapp</Text>
          <Text
            color="$yellow2"
            fontWeight={900}
            fontSize="18px"
            lineHeight="24px"
          >
            {phone}
          </Text>
        </StyleContentText>
      </StyleWhatsapp>
    </a>
  );
};

export default WhatsappAction;
