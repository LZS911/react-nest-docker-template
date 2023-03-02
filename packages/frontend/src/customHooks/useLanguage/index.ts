import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { SupportLanguage } from '../../locale';
import { IReduxState } from '../../store';
import { setCurrentLang } from '../../store/userConfig';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (lang: SupportLanguage) => {
    dispatch(setCurrentLang(lang));
    i18n.changeLanguage(lang);
  };

  const currentLanguage = useSelector((state: IReduxState) => {
    return state.userConfig.lang;
  });
  return {
    changeLanguage,
    currentLanguage,
  };
};

export default useLanguage;
