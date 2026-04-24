import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../../app/providers/AppProvider';
import { ActionButton } from '../../components/ui/ActionButton';

export function LoginPage() {
  const navigate = useNavigate();
  const { loginAs, companyProfile } = useAppState();
  const [username, setUsername] = useState('admin');

  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-mapco-900 via-mapco-800 to-slate-900 p-6">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          {companyProfile?.logoDataUrl ? <img src={companyProfile.logoDataUrl} alt="شعار الشركة" className="mx-auto mb-4 h-32 w-full object-contain" /> : null}
          <h1 className="text-2xl font-bold text-slate-900">{companyProfile?.companyNameAr ?? 'مهابة الفن للدعاية والإعلان'}</h1>
          <p className="mt-2 text-sm text-slate-500">دخول احترافي لنظام الشحنات والمخزون والإنتاج</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); loginAs(username); navigate('/'); }}>
          <div><label className="label">اسم المستخدم</label><input className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin أو employee" /></div>
          <div><label className="label">كلمة المرور</label><input className="input" type="password" value="123456" readOnly /></div>
          <ActionButton type="submit">دخول</ActionButton>
        </form>
        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">للتجربة السريعة:<div className="mt-2 font-medium">admin = صلاحيات كاملة / employee = صلاحيات محدودة</div></div>
      </div>
    </div>
  );
}
