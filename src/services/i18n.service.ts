import { I18nService as BaseI18nService } from 'jslib/services/i18n.service';

export class I18nService extends BaseI18nService {
    constructor(systemLanguage: string, localesDirectory: string) {
        super(systemLanguage || 'en-US', localesDirectory, async (formattedLocale: string) => {
            const filePath = this.localesDirectory + '/' + formattedLocale + '/messages.json?cache=' +
                process.env.CACHE_TAG;
            const localesResult = await fetch(filePath);
            const locales = await localesResult.json();
            return locales;
        });

        this.supportedTranslationLocales = [
            'en',
        ];
    }
}
