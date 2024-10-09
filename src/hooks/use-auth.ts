// // file: /src/hooks/use-auth.ts
import { useState, useEffect } from 'react';
import { account } from '@/lib/appwrite';
import { Models } from 'appwrite';

export function useAuth() {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.get();
        setUser(session);
      } catch (error) {
        console.error('Session error:', error);
        setUser(null);
      }
    };

    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const session = await account.get();
      setUser(session);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    const maxRetries = 5;
    let attempt = 0;
    let delay = 1000; // Initial delay of 1 second

    while (attempt < maxRetries) {
      try {
        await account.create('unique()', email, password, name);
        await login(email, password);
        return;
      } catch (error) {
        if ((error as any).code === 429) {
          console.warn(`Rate limit exceeded. Retrying in ${delay / 1000} seconds...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
          attempt++;
          delay *= 2; // Exponential backoff
        } else {
          console.error('Signup error:', error);
          throw error;
        }
      }
    }

    throw new Error('Signup failed after multiple attempts due to rate limiting.');
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  return { user, login, signup, logout };
}