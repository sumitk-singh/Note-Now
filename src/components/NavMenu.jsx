import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNotes, useMobileMenu } from "../context";
import { Footer, NoteModal, LabelModal } from "./index";
import Logo from '../../src/assets/images/logo.png'

const NavMenu = () => {
  const [isAddNote, setIsAddNote] = useState(false);
  const [isEditLabel, setIsEditLabel] = useState(false);
  const { notesState } = useNotes();
  const { mobileMenuToggle, setMobileMenuToggle } = useMobileMenu();

  const getActiveStyle = ({ isActive }) =>
    isActive ? { backgroundColor: "var(--menu-hover)" } : null;
  return (
    <>
      <aside className={`side-menu ${mobileMenuToggle ? "show-menu" : ""}`}>
        <nav className="menu-ctn">
          <div className="flex-align-center mobile-logo-close">
            <img id="Logo" src={Logo} alt="" />
            <span
              onClick={() => setMobileMenuToggle((prev) => !prev)}
            >
            </span>
          </div>
          <div
            className="nav-links"
            onClick={() => setMobileMenuToggle((prev) => !prev)}
          >
            <NavLink to="/notes" style={getActiveStyle} className="menu-link">
              <i class="fa fa-home" aria-hidden="true"></i> <p id="spacer"></p> Notes
            </NavLink>
            {notesState.labels.map((item) => (
              <NavLink
                to={`/label/${item.label}`}
                style={getActiveStyle}
                className="menu-link"
                key={item.id}
              >
                <i class="fa fa-pencil-square" aria-hidden="true"></i>
                <p id="spacer"></p>
                label-
                {item.label}
              </NavLink>
            ))}
            <div
              className="menu-link cursor-pointer"
              onClick={() => setIsEditLabel((prev) => !prev)}
            >
              <i class="fa fa-pencil" ></i>
              <p id="spacer"></p> Edit labels
            </div>
            <NavLink to="/archive" style={getActiveStyle} className="menu-link">
              <i class="fa fa-archive" aria-hidden="true"></i>
              <p id="spacer"></p> Archive
            </NavLink>
            <NavLink to="/trash" style={getActiveStyle} className="menu-link">
              <i class="fa fa-trash" aria-hidden="true"></i>
              <p id="spacer"></p> Trash
            </NavLink>
            <button
              id="add-note-btn"
              onClick={() => setIsAddNote((prev) => !prev)}
            >
              Add Note
            </button>
            {isAddNote && (
              <NoteModal setIsModalOpen={setIsAddNote} isAddNote={isAddNote} />
            )}
           
          </div>
        </nav>
        <Footer />
      </aside>
      {isEditLabel && <LabelModal toggleLabelModal={setIsEditLabel} />}
    </>
  );
};

export { NavMenu };
