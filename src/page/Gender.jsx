
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import WomanAvatar from "@/assets/images/woman.svg"
import ManAvatar from "@/assets/images/man.svg"
import GenderSvg from "@/assets/images/gender.svg"

export default function Gender() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="container px-4 mx-auto" >
                <div className="flex items-center justify-center">
                    <Card className="w-full max-w-sm" dir="rtl">
                        <CardHeader>
                            <CardTitle className="font-VazirMedium sm:text-lg">جنسیت</CardTitle>
                            <CardDescription className="font-VazirLight">لطفا از بخش زیر جنسیت خود را مشخص کنید.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-evenly">
                                <div className="w-18 h-18 flex items-center justify-center bg-foreground rounded-full overflow-hidden cursor-pointer hover:scale-125 transition-all">
                                    <img src={WomanAvatar} alt="Woman Avatar" />
                                </div>
                                <div className="w-18 h-18 flex items-center justify-center bg-foreground rounded-full overflow-hidden cursor-pointer hover:scale-125 transition-all">
                                    <img src={ManAvatar} alt="Man Avatar" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <img className="w-60 h-60" src={GenderSvg} alt="Gender" />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
