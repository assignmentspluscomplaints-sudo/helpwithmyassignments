import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { randomBytes } from 'crypto'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const admin = await prisma.adminUser.findUnique({ where: { email } })
  if (!admin) return NextResponse.json({ error: 'Invalid' }, { status: 401 })

  const valid = await bcrypt.compare(password, admin.password)
  if (!valid) return NextResponse.json({ error: 'Invalid' }, { status: 401 })

  const token = randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

  await prisma.adminSession.create({ data: { token, adminId: admin.id, expiresAt } })

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_token', token, {
    httpOnly: true, secure: true, sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, path: '/',
  })
  return res
}