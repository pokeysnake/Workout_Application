//src/components/Sidebar.tsx
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Sidebar() {
  return (
    <div className="h-full p-4 flex flex-col">
      {/* Brand / Logo - Enhanced with better styling */}
      <Link href="/" className="pl-10 mb-5 inline-flex items-center gap-3">
        <div>
          <Image
            src="/logo.png"
            alt="LiftTrack logo"
            width={100} height={30}
          />
        </div>
        <span className="text-white font-bold text-2xl ">Fork Lift</span>
      </Link>


      <div className="flex-1 min-h-0 flex flex-col gap-3">

        {/*CARD 1*/}
        <Card className="mb-4 glass">
          <CardHeader>
            <CardTitle className="text-base text-white text-lg">Hello, User…</CardTitle>
            <CardDescription className="text-white opacity-80 text-md pb-2">You are on a 7 day streak!</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-white font-medium">Workouts Completed: 28</p>
          </CardContent>
          <CardFooter className="text-sm">
            <Link href="/workouts" className="text-white font-medium">View today&apos;s workout → </Link>
          </CardFooter>
        </Card>

        {/*CARD 2*/}
        <Card className="mb-4 glass">
          <CardHeader>
            <CardTitle className="text-base text-white text-lg">Lifetime Stats</CardTitle>
            <CardDescription className="text-white opacity-80 text-sm pb-2">Measuring all the whey back</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-white ">Weight Lifted: 130,124 lbs</p>
            <p className="text-white ">Reps Completed: 5,880</p>
            <p className="text-white ">Workouts Completed: 98</p>
            <p className="text-white ">Weight: +21.23 lbs</p>
          </CardContent>
        </Card>

        {/*CARD 3*/}
        <Card className="mb-4 glass">
          <CardHeader>
            <CardTitle className="text-base text-white text-lg">Your month so far</CardTitle>
            <CardDescription className="text-white opacity-80 text-sm pb-2">Implement Calendar here...</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-white ">calneder</p>
            <p className="text-white ">calneder</p>
            <p className="text-white ">calneder</p>
            <p className="text-white ">calneder</p>
            <p className="text-white ">calneder</p>
          </CardContent>
        </Card>


      </div>



    </div>
  );
}
