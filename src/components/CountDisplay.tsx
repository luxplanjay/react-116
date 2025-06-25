/**
 * - Відображає текст з поточним значенням count
 * - Рендериться у App
 */

interface CountDisplayProps {
  count: number;
}

export default function CountDisplay({ count }: CountDisplayProps) {
  return <div>The current counter value is {count}</div>;
}
