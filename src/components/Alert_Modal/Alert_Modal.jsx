import { notification } from 'antd';
import { useEffect } from 'react';

const Alert_Modal = ({ placement, message, desc, icon, set_show_modal }) => {

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement, message, desc, icon) => {
        api.info({
            message: message,
            description: desc,
            placement,
            duration: 2,
            icon: icon
        });
    };

    useEffect(() => {
        openNotification(placement, message, desc, icon)
        setTimeout(() => {
            set_show_modal(false)
        }, 2500);
    }, [])


    return (
        <>
            {contextHolder}
        </>
    )
}

export default Alert_Modal