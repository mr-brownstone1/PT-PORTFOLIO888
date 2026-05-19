import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function WritingPage() {
  return (
    <PageLayout>
      <div className="border-t border-zinc-200 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Writing
          </h1>
          <p className="mt-4 text-zinc-600">
            บทความและสิ่งพิมพ์ล่าสุด
          </p>
          <div className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-12 text-center">
            <p className="text-zinc-600">
              กำลังเตรียมเนื้อหาส่วนนี้
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-block text-sm font-medium text-zinc-900 underline hover:no-underline"
            >
              ติดต่อสอบถาม
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
