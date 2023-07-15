import React, {useEffect, useState} from 'react';

export const Clock = () => {
    const [data, setData] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setData(new Date())
        }, 1000)
    }, [])

    const seconds = data.getSeconds() < 10
        ? "0" + data.getSeconds()
        : data.getSeconds()

    return (
        <div>
            <span>{data.getHours()}</span>
            :
            <span>{data.getMinutes()}</span>
            :
            <span>{seconds}</span>
        </div>
    );
};

