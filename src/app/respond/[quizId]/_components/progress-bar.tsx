import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Button from "~/components/button";

export default function NavigationBar(props: {
  current: number;
  total: number;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex w-full items-center justify-between gap-4">
        {props.current >= 0 && props.current < props.total && (
          <Button onClick={props.onPrevious}>
            <ChevronLeftIcon />
            <span className="sr-only">Previous Question</span>
          </Button>
        )}

        {props.current < props.total &&
          (props.current >= 0 ? (
            <Button onClick={props.onNext} disabled={!props.canGoNext}>
              Continue <ChevronRightIcon />
            </Button>
          ) : (
            <Button className="w-full" onClick={props.onNext}>
              Start Quiz
            </Button>
          ))}
      </div>

      {props.current >= 0 && (
        <ProgressBar current={props.current} total={props.total} />
      )}
    </div>
  );
}

function ProgressBar(props: { current: number; total: number }) {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex h-2 w-full items-center justify-between rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-300"
          style={{
            width: `${(props.current / props.total) * 100}%`,
          }}
        />
      </div>

      <span className="text-xs text-gray-500">
        {props.current < props.total
          ? `${props.current + 1} / ${props.total}`
          : "100%"}
      </span>
    </div>
  );
}
