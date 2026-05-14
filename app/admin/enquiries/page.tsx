"use client";

import { useEffect, useState } from "react";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Define the Enquiry type
interface Enquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  createdAt: any;
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "Enquiries"),
        where("status", "==", "new")
      );
      const querySnapshot = await getDocs(q);
      const data: Enquiry[] = [];
      querySnapshot.forEach((docSnap) => {
        data.push({ id: docSnap.id, ...docSnap.data() } as Enquiry);
      });
      // Sort in memory by createdAt descending to avoid index requirement
      data.sort((a, b) => {
        const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return timeB - timeA;
      });
      setEnquiries(data);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const markAsOld = async (id: string) => {
    try {
      const enquiryRef = doc(db, "Enquiries", id);
      await updateDoc(enquiryRef, {
        status: "old"
      });
      // Remove from the local UI
      setEnquiries((prev) => prev.filter((enquiry) => enquiry.id !== id));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="p-8 text-accent font-mono animate-pulse">Loading enquiries...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 md:p-12 lg:p-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold font-heading mb-12 uppercase tracking-tight text-foreground">
          <span className="text-accent">&gt;</span> New Enquiries
        </h1>
        
        {enquiries.length === 0 ? (
          <p className="font-mono text-muted-foreground bg-input p-6 border border-border cyber-chamfer-sm">
            No new enquiries at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enquiries.map((enquiry) => (
              <div key={enquiry.id} className="border border-border bg-input p-6 cyber-chamfer-sm flex flex-col relative group hover:border-[color:var(--border-accent-hover)] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-bold text-xl text-foreground">{enquiry.name}</h2>
                    {enquiry.createdAt && (
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        {new Date(enquiry.createdAt.toMillis()).toLocaleString()}
                      </p>
                    )}
                  </div>
                  <span className="bg-[color:var(--surface-accent-10)] border border-[color:var(--border-accent-faint)] text-accent px-2 py-1 text-xs font-mono tracking-widest uppercase rounded flex-shrink-0">
                    {enquiry.status}
                  </span>
                </div>
                
                <div className="space-y-4 font-mono text-sm text-muted-foreground mb-8 flex-grow">
                  <div className="space-y-2">
                    <p className="flex flex-col sm:flex-row sm:justify-between border-b border-[color:var(--border-faint)] pb-2">
                      <span className="text-accent text-xs uppercase tracking-wider mb-1 sm:mb-0">Email</span>
                      <a href={`mailto:${enquiry.email}`} className="text-foreground hover:text-accent transition-colors truncate pl-2">{enquiry.email}</a>
                    </p>
                    
                    {enquiry.company && (
                      <p className="flex flex-col sm:flex-row sm:justify-between border-b border-[color:var(--border-faint)] pb-2">
                        <span className="text-accent text-xs uppercase tracking-wider mb-1 sm:mb-0">Company</span>
                        <span className="text-foreground pl-2">{enquiry.company}</span>
                      </p>
                    )}
                    
                    {enquiry.phone && (
                      <p className="flex flex-col sm:flex-row sm:justify-between border-b border-[color:var(--border-faint)] pb-2">
                        <span className="text-accent text-xs uppercase tracking-wider mb-1 sm:mb-0">Phone</span>
                        <a href={`tel:${enquiry.phone}`} className="text-foreground hover:text-accent transition-colors pl-2">{enquiry.phone}</a>
                      </p>
                    )}
                    
                    {enquiry.service && (
                      <p className="flex flex-col sm:flex-row sm:justify-between border-b border-[color:var(--border-faint)] pb-2">
                        <span className="text-accent text-xs uppercase tracking-wider mb-1 sm:mb-0">Service</span>
                        <span className="text-foreground pl-2">{enquiry.service}</span>
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-6 pt-2">
                    <span className="text-accent text-xs uppercase tracking-wider block mb-3">Message</span>
                    <p className="whitespace-pre-wrap text-[color:var(--text-foreground-soft)] bg-[color:var(--surface-panel)] p-4 border border-[color:var(--border-faint)] text-sm leading-relaxed">
                      {enquiry.message}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => markAsOld(enquiry.id)}
                  className="w-full py-3 border border-accent text-accent hover:bg-accent hover:text-[var(--on-accent)] transition-colors font-mono text-sm font-semibold uppercase tracking-[0.15em] focus-cyber"
                >
                  Mark as Read
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}