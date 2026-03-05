import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const admin = await prisma.admin.findUnique({ where: { email } })
  if (!admin) return NextResponse.json({ error: 'Invalid' }, { status: 401 })

  const valid = await bcrypt.compare(password, admin.password)
  if (!valid) return NextResponse.json({ error: 'Invalid' }, { status: 401 })

  const { signToken } = await import('@/lib/auth')
  const token = signToken({ id: admin.id, email: admin.email })

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_token', token, {
    httpOnly: true, secure: true, sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, path: '/',
  })
  return res
}