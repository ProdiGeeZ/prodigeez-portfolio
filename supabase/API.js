import { supabase } from "./SupabaseConfig";

export const insertEmail = (email) => {
    return supabase
        .from('emails')
        .insert({ email })
        .then(({ data, error }) => {
            if (error) {
                if (error['code'] === 23505) {
                    return { error: 'Already subscribed!' };
                }
                throw new Error('Error inserting email: ' + error.message);
            }
            console.log('Email added successfully!', data);
            return { data }; 
        })
        .catch((error) => {
            console.error('Error inserting email:', error.message);
            throw new Error('Error inserting email: ' + error.message);
        });
}
