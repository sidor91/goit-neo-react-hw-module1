import TransactionHistoryItem from "./TransactionHistoryItem";
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <TransactionHistoryItem type={type} amount={amount} currency={currency} />
        </tr>))}
    </tbody>
  </table>
}