import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind'
import styles from '@/styles/customMenuButton.module.scss';
import { useRouter } from 'next/navigation'
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa";
import clsx from 'clsx';

const cx = classNames.bind(styles)

let timeout: NodeJS.Timeout | undefined;

const CustomMenuButton = ({ options, children }: {
    options: {
        id: number;
        name: string;
        href: string;
        children?: { name: string, href: string }[] | undefined
    }[],
    children: React.ReactNode
}) => {
    const popoverTriggerRef = useRef<HTMLDivElement>(null);
    const popoverContentRef = useRef<HTMLDivElement>(null);
    const subPopoverTriggerRef = useRef<HTMLDivElement>(null);
    const subPopoverContentRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [tab, setTab] = useState<number>();
    const [listHadChild, setListHadChild] = useState<{
        id: number;
        name: string;
        href: string;
        children: { name: string, href: string }[]
        //@ts-ignore
    }[]>(options.filter((item) => { return item.children !== undefined }));

    const [showPopover, setShowPopover] = useState<{
        click: boolean;
        hover: boolean;
        menuFocus: boolean;
    }>({ click: false, hover: false, menuFocus: false });

    const [showSubPopover, setShowSubPopover] = useState<boolean>(false);
    useEffect(() => {
        if (tab) {
            clearTimeout(timeout);
        }
    }, [tab]);

    useEffect(() => {
        if (!showPopover.click && !showPopover.hover && !showPopover.menuFocus) {
            setTab(undefined)
            setShowSubPopover(false)
        }
    }, [showPopover])

    useOnClickOutside(popoverTriggerRef, () => {
        clearTimeout(timeout);
        setTimeout(
            () => {
                setShowPopover((prev) => {
                    return { click: false, hover: prev.hover, menuFocus: prev.menuFocus };
                });
            },
            150
        );
    });
    useOnClickOutside(popoverContentRef, () => {
        clearTimeout(timeout);
        setTimeout(
            () => {
                setTab(undefined);
                setShowPopover((prev) => {
                    return { click: prev.click, hover: prev.hover, menuFocus: false };
                })
            },
            150
        );
    });

    useOnClickOutside(subPopoverTriggerRef, () => {
        setTimeout(
            () => {
                setTab(undefined)
                setShowSubPopover(false);
            },
            150
        );

    })

    useEffect(() => {
        const alignSubPopover = () => {
            const popoverRect = popoverContentRef.current?.getBoundingClientRect();
            const subPopoverRect = subPopoverContentRef.current?.getBoundingClientRect();
            if (popoverRect && subPopoverRect) {
                const top = popoverRect.top;
                const width = popoverRect.width;
                subPopoverContentRef.current!.style.top = `${top + 40}px`;
                subPopoverContentRef.current!.style.left = `${width}px`;

            }
        };

        if (showSubPopover) {
            alignSubPopover();
        }
    }, [showSubPopover]);


    const itemRender = () => {
        return (
            options.map((item, index) => {
                if (item.children) {
                    return (
                        <>
                            <div className={cx('menu-item-with-child')} key={index}
                                onMouseEnter={() => {
                                    clearTimeout(timeout)
                                    setTab(listHadChild.findIndex((val) => {
                                        return val.id == item.id
                                    }));
                                    setShowSubPopover(true);
                                }}
                                onMouseLeave={() => {
                                    clearTimeout(timeout)
                                    timeout = setTimeout(() => {
                                        if (!showSubPopover) {
                                            setTab(undefined)
                                        }
                                        setShowSubPopover(false)
                                    }, 200)

                                }}
                            >
                                <div className={cx('menu-item')}
                                    ref={subPopoverTriggerRef}
                                    onClick={() => {
                                        setShowSubPopover(true);
                                    }}>
                                    <p>{item.name}</p>
                                    <div style={{ color: 'black', display: 'flex', alignItems: 'center' }}><FaAngleRight /></div>
                                </div>

                            </div>
                            {index != options.length - 1 && <div className={cx('seperator')} />}
                        </>
                    )
                } else {
                    return <div key={index}>
                        <div className={cx('menu-item')} onClick={() => { router.push(item.href) }}>
                            <p>{item.name}</p>
                        </div>
                        {index != options.length - 1 && <div className={cx('seperator')} />}
                    </div>
                }

            })
        )
    }

    const subMenuRender = (items: { name: string, href: string }[]) => {
        return (
            <>
                {(showSubPopover) &&
                    <div
                        className={cx('sub-menu-content')}
                        style={{ position: 'absolute' }}
                        ref={subPopoverContentRef}
                        onMouseEnter={() => {
                            clearTimeout(timeout)
                            setShowSubPopover(true);
                        }}
                        onMouseLeave={() => {
                            clearTimeout(timeout)
                            timeout = setTimeout(() => {
                                setShowSubPopover(false);
                            }, 200)
                        }}
                    >
                        {items.map((subItem, subIndex) => {
                            return (
                                <>
                                    <div className={cx('sub-menu-item')} key={subIndex} onClick={() => { router.push(subItem.href) }}>
                                        {subItem.name}
                                    </div>
                                    {subIndex != items.length - 1 && <div className={cx('seperator')} />}
                                </>
                            )

                        })}
                    </div>
                }
            </>
        )

    }

    return (
        <>
            <div className={cx('menu-box')}
                onMouseEnter={() => {
                    setShowPopover((prev) => {
                        return { click: prev.click, hover: true, menuFocus: prev.menuFocus };
                    });
                }}
                onMouseLeave={() => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        setShowPopover((prev) => {
                            return { click: prev.click, hover: false, menuFocus: prev.menuFocus };
                        });
                    }, 50);
                }}
            >
                <div
                    className={cx('menu-button')}
                    onClick={() => {
                        setShowPopover((prev) => {
                            return { click: !prev.click, hover: prev.hover, menuFocus: false };
                        });
                    }}

                    ref={popoverTriggerRef}
                >
                    {children}
                </div>
                {(showPopover.click || showPopover.menuFocus || showPopover.hover) && (
                    <div
                        className={cx('menu-content')}
                        ref={popoverContentRef}
                        onClick={() => {
                            setShowPopover({
                                click: false,
                                hover: false,
                                menuFocus: true,
                            });
                        }}
                    >
                        <div className={cx('real-menu-content')}>
                            {itemRender()}
                        </div>
                    </div>
                )}
                {tab != undefined && subMenuRender(listHadChild[tab].children)}
            </div>
        </>
    );
};

export default CustomMenuButton;
