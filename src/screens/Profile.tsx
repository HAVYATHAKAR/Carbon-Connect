import { useState } from 'react';
import { useApp } from '../context';
import { Btn } from '../components/ui';

export default function Profile() {
  const { role } = useApp();
  const [uploads, setUploads] = useState<{name: string, status: 'pending'|'uploaded'}[]>([
    { name: 'Company Registration (KYB)', status: 'uploaded' },
    { name: 'Tax ID / PAN Certificate', status: 'uploaded' },
    { name: 'Environmental Permit', status: 'pending' }
  ]);

  const orgName = role === 'seller' ? 'UltraTech Cement' : role === 'buyer' ? 'Indian Concrete Solutions' : 'Platform Admin';
  const roleLabel = role === 'seller' ? 'Seller' : role === 'buyer' ? 'Buyer' : 'Admin';
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files.length > 0) {
      const newUploads = [...uploads];
      newUploads[index].status = 'uploaded';
      setUploads(newUploads);
      alert(`Successfully uploaded: ${e.target.files[0].name}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Organization Profile</h1>
      
      <div className="bg-white border border-zinc-200 rounded p-6 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center text-2xl font-medium text-zinc-600">
            {orgName.charAt(0)}
          </div>
          <div>
            <div className="text-xl font-semibold text-zinc-900">{orgName}</div>
            <div className="text-sm text-zinc-500 capitalize">{roleLabel} Account</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-100">
          <div>
            <div className="text-xs font-medium text-zinc-500 mb-1">Headquarters</div>
            <div className="text-sm">Mumbai, Maharashtra, India</div>
          </div>
          <div>
            <div className="text-xs font-medium text-zinc-500 mb-1">Registration Number</div>
            <div className="text-sm font-mono">U26940MH2000PLC128420</div>
          </div>
          <div>
            <div className="text-xs font-medium text-zinc-500 mb-1">Primary Contact</div>
            <div className="text-sm">admin@{orgName.toLowerCase().replace(/\s/g, '')}.in</div>
          </div>
          <div>
            <div className="text-xs font-medium text-zinc-500 mb-1">Compliance Status</div>
            <div className="text-sm text-green-700 font-medium">Verified</div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Document Management</h2>
      <div className="bg-white border border-zinc-200 rounded divide-y divide-zinc-100">
        {uploads.map((doc, i) => (
          <div key={i} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${doc.status === 'uploaded' ? 'bg-green-500' : 'bg-amber-400'}`} />
              <span className="text-sm font-medium text-zinc-900">{doc.name}</span>
            </div>
            <div>
              {doc.status === 'uploaded' ? (
                <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded border border-green-200">
                  Verified
                </span>
              ) : (
                <div className="relative">
                  <Btn variant="outline">Upload Document</Btn>
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileUpload(e, i)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
