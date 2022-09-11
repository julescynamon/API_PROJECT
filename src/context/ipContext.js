import { createContext } from 'react';

const IpContext = createContext({
    ipAddress: '',
    city: '',
    timeZone: '',
    isp: '',
    location: [0, 0],
    error: false,
    isLoading: true,
    searchIP: () => {},
});

export default IpContext;