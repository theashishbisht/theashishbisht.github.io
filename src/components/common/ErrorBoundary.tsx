import React from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center" role="alert">
          <h2 className="text-xl font-semibold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-4">{this.state.error?.message}</p>
          <Button
            onClick={() => window.location.reload()}
            variant="default"
          >
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
} 