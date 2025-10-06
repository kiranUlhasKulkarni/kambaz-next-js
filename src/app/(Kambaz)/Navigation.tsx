"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function KambazNavigation() {
  const path = usePathname();
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 110 }}
              id="wd-kambaz-navigation">
     <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
       <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
     </ListGroupItem>
      <ListGroupItem className={`border-0 text-center ${path.startsWith("/Account") ? "bg-white" : "bg-black"}`}>
       <Link href="/Account" id="wd-account-link" className={`${path.startsWith("/Account") ? "text-danger" : "text-white"} text-decoration-none`}>
         <FaRegCircleUser className="fs-1 text-white" />
         <br />
         Account
       </Link>
     </ListGroupItem>
      <ListGroupItem className={`border-0 text-center ${path.startsWith("/Dashboard") ? "bg-white" : "bg-black"}`}>
       <Link href="/Dashboard" id="wd-dashboard-link" className={`${path.startsWith("/Dashboard") ? "text-danger" : "text-white"} text-decoration-none`}>
         <AiOutlineDashboard className="fs-1 text-danger" />
         <br />
         Dashboard
       </Link>
     </ListGroupItem>
     <ListGroupItem className={`border-0 text-center ${path.startsWith("/Courses") ? "bg-white" : "bg-black"}`}>
       <Link href="/Courses" id="wd-course-link" className={`${path.startsWith("/Courses") ? "text-danger" : "text-white"} text-decoration-none`}>
         <LiaBookSolid className="fs-1 text-danger" />
         <br />
         Courses
       </Link>
     </ListGroupItem>
     <ListGroupItem className={`border-0 text-center ${path.startsWith("/Calendar") ? "bg-white" : "bg-black"}`}>
       <Link href="/Calendar" id="wd-calendar-link" className={`${path.startsWith("/Calendar") ? "text-danger" : "text-white"} text-decoration-none`}>
         <IoCalendarOutline className="fs-1 text-danger" />
         <br />
         Calendar
       </Link>
     </ListGroupItem>
     <ListGroupItem className={`border-0 text-center ${path.startsWith("/Inbox") ? "bg-white" : "bg-black"}`}>
       <Link href="/Inbox" id="wd-inbox-link" className={`${path.startsWith("/Inbox") ? "text-danger" : "text-white"} text-decoration-none`}>
         <FaInbox className="fs-1 text-danger" />
         <br />
         Inbox
       </Link>
     </ListGroupItem>
     <ListGroupItem className={`border-0 text-center ${path.startsWith("/Labs") ? "bg-white" : "bg-black"}`}>
       <Link href="/Labs" id="wd-labs-link" className={`${path.startsWith("/Labs") ? "text-danger" : "text-white"} text-decoration-none`}>
         <LiaCogSolid className="fs-1 text-danger" />
         <br />
         Labs
       </Link>
     </ListGroupItem>
      </ListGroup>
);}
