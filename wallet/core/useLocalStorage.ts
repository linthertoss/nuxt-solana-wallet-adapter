import { customRef, Ref } from '@nuxtjs/composition-api';

export function useLocalStorage<T>(key: string, defaultValue: T | null = null): Ref<T | null> {
    return customRef<T | null>((track, trigger) => ({
        get() {
            track();

            try {
                const value = localStorage.getItem(key);
                if (value) return JSON.parse(value) as T;
            } catch (error) {
                console.error(error);
            }

            return defaultValue;
        },
        set(value) {
            try {
                if (value === null) {
                    localStorage.removeItem(key);
                } else {
                    localStorage.setItem(key, JSON.stringify(value));
                }
            } catch (error) {
                console.error(error);
            }

            trigger();
        },
    }));
}