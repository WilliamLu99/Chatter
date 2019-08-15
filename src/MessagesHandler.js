import React from 'react';
import Message from './Message';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_MESSAGES_QUERY = gql`
  query($user: ID!) {
    messages(userId: $user) {
      content
      sender {
        id
      }
    }
  }
`

function MessagesHandler(props) {
  const {loading, error, data} = useQuery(GET_MESSAGES_QUERY, {
    variables: {user: 1},
  });

  if (loading) return 'Loading...';
  if (error) return `Errror! ${error.message}`;

  let raw_messages = data["messages"]
  let messages = [];

  for (let i = 0; i < raw_messages.length; i++) {
    let sent = raw_messages[i]["sender"]["id"] === "1"
    let message = <Message sent={sent} message={raw_messages[i]["content"]}></Message>
    messages.push(message);
  }
  return (
    <div>
      {messages}
    </div>
  );
}

export default MessagesHandler;
