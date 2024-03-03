import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

export const SetupPage = () => {
  return (
    <div className=''>
      protected page
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default SetupPage;
