type JsonType<T> = {
    [P in keyof Omit<T, 'ezx' | 'iat' | 'salt' | 'hash'> | 'active']: P extends 'active' ? boolean : string;
};

export { JsonType };
