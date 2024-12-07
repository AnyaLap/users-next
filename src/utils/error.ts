export const fetchData = async <T>(url: string): Promise<{ data?: T; error?: string }> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch!');
        }
        const data = await response.json();
        return { data };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
};