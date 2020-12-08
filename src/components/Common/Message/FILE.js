import React from 'react';
import DelayImage from '../../Common/DelayImage/DelayImage';
import moment from 'moment';

const FILE = props => {
    const { data, userId, avatar } = props;
    const name = data.displayName;
    const content = data.value;
    const getSendTime = format => {
        return moment(data.sendTime).format(format);
    }
    const isMyMessage = () => data.senderId === userId;
    const isToday = moment().diff(data.sendTime, 'days') === 0;
    const sendTime = isToday ? getSendTime('HH:mm') : getSendTime('HH:mm DD/MM/YYYY');
    const fileUrl = data.url;
    return (
        <>
            <div className={`${isMyMessage() ? 'my_message_item' : 'other_message_item'}`}>
                <div className={`${isMyMessage() ? 'my_message' : 'other_message'}`}>
                    <div className="avatar">
                        <DelayImage src={avatar}  />
                    </div>
                    <div className="content">
                        <div>
                            <div className="name">{name}</div>
                            <div className="message_content">
                                <a href={fileUrl} target="_blank">{content}</a>
                            </div>
                        </div>
                        <div className="sendtime">
                            {sendTime}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FILE;