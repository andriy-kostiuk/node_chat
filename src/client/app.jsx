import { JoinForm } from './components/JoinForm';

import './styles.css';
import styles from './app.module.css';
import { MessageForm } from './components/MessageForm';
import { Messages } from './components/Messages/Messages.jsx';

const messages = [
  {
    id: 1,
    user: 'Andrii',
    createdAt: Date.now(),
    message: 'Hello',
  },
  {
    id: 2,
    user: 'Andrii',
    createdAt: Date.now(),
    message: 'Hello',
  },
  {
    id: 3,
    user: 'Andrii',
    createdAt: Date.now(),
    message: 'Hello',
  },
  {
    id: 4,
    user: 'Andrii',
    createdAt: Date.now(),
    message: 'Hello',
  },
];

export const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <h1 className={styles.app__title}>Chat application</h1>
        <JoinForm />
      </div>
      <Messages messages={messages} className={styles.app__messages} />
      <MessageForm />
    </div>
  );
};
