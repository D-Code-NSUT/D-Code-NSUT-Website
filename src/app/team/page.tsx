import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Secretaries from "@/components/ui/private/team/Secretaries";
import President from "@/components/ui/private/team/Presidents";
import CPDepartment from "@/components/ui/private/team/CPDepartments";
import WebDepartment from "@/components/ui/private/team/WebDepartments";
import AIDepartment from "@/components/ui/private/team/AIDepartments";
import ContentDepartment from "@/components/ui/private/team/ContentDepart";
import Lead from "@/components/ui/private/team/Leads";

export default function Team() {
  return (
    <>
      <div className="mt-10 flex flex-col justify-center items-center gap-16">
        <President />
        <Secretaries />
        <Lead />

        {/* <div>
        <h1 className="text-3xl text-center p-5 font-semibold">Our Departements</h1>
          <Tabs defaultValue="DSA">
            <div className="flex justify-center items-center">
              <TabsList className="sm:min-h-14 sm:px-3">
                <TabsTrigger value="DSA" className="min-w-14 sm:min-w-24 sm:text-lg">
                  DSA<span className="sr-only">(Data Structures and Algorithms)</span>
                </TabsTrigger>
                <TabsTrigger value="WebDev" className="min-w-14 sm:min-w-24 sm:text-lg">
                  Web Dev<span className="sr-only">(Web Development)</span>
                </TabsTrigger>
                <TabsTrigger value="ML" className="min-w-14 sm:min-w-24 sm:text-lg">
                  AI & ML <span className="sr-only">(Machine Learning)</span>
                </TabsTrigger>
                <TabsTrigger value="D&C" className="min-w-14 sm:min-w-24 sm:text-lg">
                  Design & Content <span className="sr-only">(Design and Content)</span>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-10">
              <TabsContent value="DSA">
                <CPDepartment />
              </TabsContent>
              <TabsContent value="WebDev">
                <WebDepartment />
              </TabsContent>
              <TabsContent value="ML">
                <AIDepartment />
              </TabsContent>
              <TabsContent value="D&C">
                <ContentDepartment />
              </TabsContent>
            </div>
          </Tabs>
        </div> */}

      </div>
    </>
  );
}
