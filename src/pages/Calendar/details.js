import { useEffect, useState } from "react";
import { CloseIcon, Loader } from "@mantine/core";
import {
  CalendarIcon,
  FullViewIcon,
  GeoLocation,
  LinkIcon,
  PenIcon,
  ShareIcon,
  TimeIcon,
  UserIcon,
  UsersIcon,
} from "../../assets/svgs";
import { getRequest } from "../../service/api";
import { formatTime } from "../../utils";
import { toast } from "react-toastify";

const MoreDetailsModal = ({
  event,
  onClose,
  onChangeView,
  fullView,
  visible,
  colors,
  user,
  onUpdate,
  eventObject,
  setEventObject,
}) => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  useEffect(() => {
    if (event?.id && user?.token && event?.id !== eventObject?.id) {
      setLoading(true);
      getRequest(`meetings/${event?.id}`, user?.token)
        .then(({ data }) => {
          setLoading(false);
          setEventObject(data?.data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "error");
        });
    }
  }, [user?.token, event?.id, eventObject?.id, setEventObject]);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(eventObject?.link);
    toast.success("Ссылка скопирована в буфер обмена", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleShare = () => {
    navigator
      .share({
        title: "Поделиться встречей",
        text: "Поделиться встречей",
        url: eventObject?.link,
      })
      .finally(() => {
        setShareModal(false);
      });
  };

  const betweenTimes = (start, end) => {
    // Boshlanish va tugash vaqtlarini Date obyektlariga aylantirish
    const startDate = new Date(start);
    const endDate = new Date(end);

    // Vaqt farqini millisekundlarda hisoblash
    const timeDifference = endDate - startDate;

    // Millisekundlarni daqiqalarga aylantirish
    const minutesDifference = Math.floor(timeDifference / 60000);

    return `${minutesDifference} minutes`;
  };

  return (
    <div
      className={`more-details-modal ${fullView ? "full-view" : ""} ${
        visible ? "open-modal" : ""
      }`}
    >
      <div className={`share-modal ${shareModal ? "open-share-modal" : ""}`}>
        <div className="share-modal-header">
          <h2>Поделиться ссылкой на встречу</h2>
          <button
            onClick={() => setShareModal(!shareModal)}
            className="share-modal-close"
          >
            <CloseIcon size="16" color="#fff" />
          </button>
        </div>
        <div className="share-modal-body">
          <div className="share-modal-body-row">
            <div className="label-box">
              <input type="text" value={eventObject?.link} readOnly />
              <button onClick={handleCopy} disabled={copied}>
                {copied ? "Скопировано" : "Копировать"}
              </button>
            </div>
            <button className="share-button" onClick={handleShare}>
              <span>Делиться</span>
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="more-details-modal-content">
        {loading ? (
          <Loader m="auto" />
        ) : (
          <>
            <div className="more-details-modal-header">
              <h2>Синхронизация дизайна</h2>
              <div className="more-details-modal-header-actions">
                <button
                  onClick={onChangeView}
                  title={fullView ? "Свернуть" : "Развернуть"}
                >
                  <FullViewIcon expanded={fullView} className="expand-button" />
                </button>
                <button
                  onClick={(e) => {
                    onClose(e);
                    setShareModal(false);
                  }}
                >
                  <CloseIcon size="16" />
                </button>
              </div>
            </div>
            <div className="more-details-modal-body">
              <div className="more-details-modal-body-left">
                <ul>
                  <li>
                    <CalendarIcon color="rgb(110, 119, 135)" />
                    <div className="more-details-modal-block">
                      <span>Дата</span>
                      <strong>{eventObject?.date}</strong>
                    </div>
                  </li>
                  <li>
                    <GeoLocation color="rgb(110, 119, 135)" />
                    <div className="more-details-modal-block">
                      <span>Место встречи</span>
                      <strong>{event?.place_meeting}</strong>
                    </div>
                  </li>
                  <li>
                    <TimeIcon color="rgb(110, 119, 135)" />
                    <div className="more-details-modal-block">
                      <div className="badge-row">
                        <span>Время</span>
                        <div
                          className="badge"
                          style={{
                            backgroundColor:
                              colors.badge[event?.place_meeting]?.bg,
                            color: colors.badge[event?.place_meeting]?.color,
                          }}
                        >
                          {betweenTimes(event?.start, event?.end)}
                        </div>
                      </div>
                      <strong>
                        {formatTime(event?.start)} - {formatTime(event?.end)}
                      </strong>
                    </div>
                  </li>
                  <li>
                    <LinkIcon color="rgb(110, 119, 135)" />
                    <div className="more-details-modal-block">
                      <span>Онлайн ссылка</span>
                      <a
                        href={eventObject?.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {eventObject?.link}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="more-details-modal-body-right">
                <ul>
                  <li>
                    <UserIcon />
                    <div className="more-details-modal-block">
                      <span>Организатор</span>
                      <strong>{eventObject?.organizer}</strong>
                    </div>
                  </li>
                  <li>
                    <UsersIcon />
                    <div className="more-details-modal-block">
                      <span>Приглашенные</span>
                      {eventObject?.participants?.map((participant) => (
                        <div
                          className="more-details-modal-user-block"
                          key={participant?.id}
                        >
                          <img
                            src={
                              participant?.img ||
                              "http://via.placeholder.com/28x28"
                            }
                            alt={participant?.name}
                          />
                          <h4>{participant?.name}</h4>
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="more-details-modal-footer">
              <button
                className="edit-form-opener"
                onClick={() =>
                  onUpdate({
                    meeting_name: eventObject?.meeting_name,
                    start_time: event?.start?.split("T")[1].slice(0, 5),
                    end_time: event?.end?.split("T")[1].slice(0, 5),
                    place_meeting: eventObject?.place_meeting,
                    link: eventObject?.link,
                    id: eventObject?.id,
                    participants: eventObject?.participants?.map(
                      (participant) => participant.id
                    ),
                  })
                }
              >
                <PenIcon />
                <span>Редатировать</span>
              </button>
              <button
                className="share-form-opener"
                onClick={() => setShareModal(!shareModal)}
              >
                <span>Поделиться</span>
                <ShareIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MoreDetailsModal;
