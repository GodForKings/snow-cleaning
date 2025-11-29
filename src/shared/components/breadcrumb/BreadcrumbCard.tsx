import { Home } from 'lucide-react'

import { PAGES, type IBreadcrumbItem } from '@/shared'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/shared/components/ui/breadcrumb'
import { Card, CardContent } from '@/shared/components/ui/card'

import Link from 'next/link'
import type { FC } from 'react'

interface BreadcrumbCardProps {
	listBreadcrumb: IBreadcrumbItem[]
	className?: string
}

export const BreadcrumbCard: FC<BreadcrumbCardProps> = props => {
	const { listBreadcrumb, className } = props

	return (
		<Card className={className}>
			<CardContent className='px-4 py-2.5'>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<Link href={PAGES.HOME}>
								<Home className='size-4' />
							</Link>
						</BreadcrumbItem>

						{listBreadcrumb?.map((item, index) => (
							<ul key={item.href} className='flex items-center justify-center'>
								<BreadcrumbSeparator />

								{index === listBreadcrumb.length - 1 ? (
									<BreadcrumbItem>
										<BreadcrumbPage>{item?.icon || item.label}</BreadcrumbPage>
									</BreadcrumbItem>
								) : (
									<BreadcrumbItem>
										<Link href={item.href}>{item?.icon || item.label}</Link>
									</BreadcrumbItem>
								)}
							</ul>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			</CardContent>
		</Card>
	)
}
